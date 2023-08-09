package com.example.jamesie_be.service;

import com.example.jamesie_be.model.Customers;
import com.example.jamesie_be.model.Products;
import com.example.jamesie_be.model.ShoppingCart;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IShoppingCartService {
    void save(ShoppingCart shoppingCart);

    List<ShoppingCart> findAll();


    ResponseEntity<?> add(Long sizeId, Products productName, Customers username, Integer quantity);

    List<ShoppingCart> findByUsername(String username);
}
