package com.example.jamesie_be.service;

import com.example.jamesie_be.model.Customers;

public interface ICustomerService {
    Customers findByUsername(String username);
}
