package com.example.jamesie_be.service.impl;

import com.example.jamesie_be.model.Orders;
import com.example.jamesie_be.repository.IOrderRepository;
import com.example.jamesie_be.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private IOrderRepository iOrderRepository;

    @Override
    public void save(Orders orders) {
        iOrderRepository.save(orders);
    }
}
