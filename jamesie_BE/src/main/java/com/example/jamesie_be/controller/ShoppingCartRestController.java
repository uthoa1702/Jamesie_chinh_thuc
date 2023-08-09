package com.example.jamesie_be.controller;

import com.example.jamesie_be.model.Customers;
import com.example.jamesie_be.model.Products;
import com.example.jamesie_be.model.ShoppingCart;
import com.example.jamesie_be.service.ICustomerService;
import com.example.jamesie_be.service.IProductService;
import com.example.jamesie_be.service.IShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/shopping")
@CrossOrigin("*")
public class ShoppingCartRestController {
    @Autowired
    private IShoppingCartService iShoppingCartService;
    @Autowired
    private IProductService iProductService;

    @Autowired
    private ICustomerService iCustomerService;

    @Transactional
    @PostMapping("/add")
    public ResponseEntity<?> addToCart(@RequestParam("size") Long sizeId,
                                                @RequestParam("productName") String productName,
                                                @RequestParam("username") String username,
                                                @RequestParam("quantity") Integer quantity) {

   try {
       Products products = iProductService.findByNameAndSize(productName, sizeId);
       Customers customers = iCustomerService.findByUsername(username);
       return iShoppingCartService.add(sizeId,products,customers,quantity);

   }catch (Exception e){

       return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed");
   }

    }

    @GetMapping("/myCart")
    public ResponseEntity<?> getMyCart(@RequestParam("username")String username){
        List<ShoppingCart> shoppingCartList = iShoppingCartService.findByUsername(username);
        if (shoppingCartList.isEmpty()){
            return ResponseEntity.status(HttpStatus.OK).body("Your cart is empty");
        }
        return new ResponseEntity<>( shoppingCartList , HttpStatus.OK);

    }
}
