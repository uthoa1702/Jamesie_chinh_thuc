package com.example.jamesie_be.repository;

import com.example.jamesie_be.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IOrderRepository extends JpaRepository<Orders,Long> {
}
