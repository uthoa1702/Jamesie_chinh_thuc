package com.example.jamesie_be.service.impl;

import com.example.jamesie_be.model.Customers;
import com.example.jamesie_be.repository.ICustomerRepository;
import com.example.jamesie_be.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private ICustomerRepository iCustomerRepository;

    @Override
    public Customers findByUsername(String username) {

        return iCustomerRepository.findByUsername(username);
    }
}
