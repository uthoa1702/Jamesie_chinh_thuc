package com.example.jamesie_be.controller;

import com.example.jamesie_be.config.JwtTokenUtil;
import com.example.jamesie_be.model.*;
import com.example.jamesie_be.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/order")
public class OrderRestController {
    @Autowired
    private IShoppingCartService iShoppingCartService;
    @Autowired
    private IProductService iProductService;

    @Autowired
    private ICustomerService iCustomerService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private IOrderService iOrderService;
    @Autowired
    private IOrderDetailService iOrderDetailService;

    private static UserDetails getUserDetails() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return (UserDetails) authentication.getPrincipal();
    }

    @PostMapping("/createOrder")
    @Transactional
    public ResponseEntity<?> createOrder() {
        List<ShoppingCart> shoppingCartList = iShoppingCartService.findByUsername(getUserDetails().getUsername());

        Customers customers = iCustomerService.findByUsername(getUserDetails().getUsername());
        Orders orders = new Orders(customers);
        iOrderService.save(orders);
        int count = 0;
        for (int i = 0; i < shoppingCartList.size(); i++) {
            if (shoppingCartList.get(i).getProducts().getAmount() >= shoppingCartList.get(i).getAmount()) {
                Long change = shoppingCartList.get(i).getProducts().getAmount() - shoppingCartList.get(i).getAmount();
                OrderDetail orderDetail = new OrderDetail(
                        orders,
                        shoppingCartList.get(i).getProducts(),
                        shoppingCartList.get(i).getAmount(),
                        (shoppingCartList.get(i).getProducts().getPrice() * shoppingCartList.get(i).getAmount()),
                        "Confirmed");
                orderDetail.getProducts().setAmount(change);
                iOrderDetailService.save(orderDetail);
                iShoppingCartService.deleteProductInCart(getUserDetails().getUsername(), orderDetail.getProducts().getId());
            } else {

                OrderDetail orderDetail = new OrderDetail(
                        orders,
                        shoppingCartList.get(i).getProducts(),
                        shoppingCartList.get(i).getAmount(),
                        (shoppingCartList.get(i).getProducts().getPrice() * shoppingCartList.get(i).getAmount()),
                        "Pending");
                iOrderDetailService.save(orderDetail);
                iShoppingCartService.deleteProductInCart(getUserDetails().getUsername(), orderDetail.getProducts().getId());
                count++;
            }
        }
        if (count > 0) {
            orders.setStatus("Not fully success");
        }
        else {
            orders.setStatus("Successfully");
        }
        iOrderService.save(orders);
        return new ResponseEntity<>("Successfully", HttpStatus.OK);
    }
}
