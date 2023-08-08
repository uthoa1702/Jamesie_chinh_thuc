package com.example.jamesie_be.service.impl;

import com.example.jamesie_be.model.DTO.IImageDTO;
import com.example.jamesie_be.model.DTO.IProductDTO;
import com.example.jamesie_be.model.DTO.ProductDTO;
import com.example.jamesie_be.model.Images;
import com.example.jamesie_be.repository.IImageRepository;
import com.example.jamesie_be.repository.ProductRepository;
import com.example.jamesie_be.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    ProductRepository iProductRepository;
    @Autowired
    IImageRepository iImageRepository;

    @Override
    public Page<ProductDTO> getProductsPage(Pageable pageable, String sortBy, double from, double to, String color, String type, String productName) {
        Page<IProductDTO> iProductDTOS = iProductRepository.getProducts(pageable, from, to,"%" + color + "%" ,"%" + type + "%" ,"%" + productName + "%");

        return transformDTO(iProductDTOS);
    }

    @Override
    public Double getMaxPrice() {
        return iProductRepository.getMaxPrice();
    }

    @Override
    public List<IImageDTO> getImages(String id) {
        return iImageRepository.getImages(id);
    }

    public static Page<ProductDTO> transformDTO(Page<IProductDTO> iProductDTOS) {

        return iProductDTOS.map(iProductDTO -> {
            ProductDTO productDTO = new ProductDTO();
            productDTO.setColor(iProductDTO.getColor());
            productDTO.setName(iProductDTO.getName());
            productDTO.setPrice(iProductDTO.getPrice());
            productDTO.setAmount(iProductDTO.getAmount());
            productDTO.setDescription(iProductDTO.getDescription());
            productDTO.setImage1(iProductDTO.getImage1());
            productDTO.setImage2(iProductDTO.getImage2());
            productDTO.setImage3(iProductDTO.getImage3());
            productDTO.setUrl(iProductDTO.getUrl());
            return productDTO;
        });

    }
}
