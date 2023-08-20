package com.example.jamesie_be.controller;

import com.example.jamesie_be.model.Customers;
import com.example.jamesie_be.model.Orders;
import com.example.jamesie_be.service.ICustomerService;
import com.example.jamesie_be.service.IOrderService;
import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/history")
public class OrderHistoryRestController {
    @Autowired
    private IOrderService iOrderService;

    @Autowired
    private ICustomerService iCustomerService;

    private static UserDetails getUserDetails() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return (UserDetails) authentication.getPrincipal();
    }

    @GetMapping("/getHistoryList")
    public ResponseEntity<?> getlist() {
        Customers customers = iCustomerService.findByUsername(getUserDetails().getUsername());
        List<Orders> ordersList =  iOrderService.getHistoryByCustomer(customers);
        return new ResponseEntity<>(ordersList, HttpStatus.OK);
    }
}
