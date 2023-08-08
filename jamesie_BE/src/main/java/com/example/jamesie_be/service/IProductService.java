package com.example.jamesie_be.service;

import com.example.jamesie_be.model.DTO.IImageDTO;
import com.example.jamesie_be.model.DTO.ProductDTO;
import com.example.jamesie_be.model.Images;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductService {
    Page<ProductDTO> getProductsPage(Pageable pageable, String sortBy, double from, double to, String color, String type, String productName);

    Double getMaxPrice();

    List<IImageDTO> getImages(String id);
}
