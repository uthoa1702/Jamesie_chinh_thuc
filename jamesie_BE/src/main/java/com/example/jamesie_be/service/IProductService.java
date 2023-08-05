package com.example.jamesie_be.service;

import com.example.jamesie_be.model.DTO.ProductDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService {
    Page<ProductDTO> getProductsPage(Pageable pageable, String sortBy, double from, double to, String color, String type, String productName);

    Double getMaxPrice();
}
