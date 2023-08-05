package com.example.jamesie_be.controller;

import com.example.jamesie_be.model.DTO.ProductDTO;
import com.example.jamesie_be.model.Products;
import com.example.jamesie_be.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.PermitAll;

@RestController
@CrossOrigin("*")
@RequestMapping("/products")
public class ProductRestController {
    @Autowired
    IProductService iProductService;


    //    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_CUSTOMER')")
    @GetMapping("")
    public ResponseEntity<Page<ProductDTO>> getList(@RequestParam(value = "page", defaultValue = "0") Integer page,
                                                    @RequestParam("sortBy") String sortBy,
                                                    @RequestParam("price") String priceFromTo,
                                                    @RequestParam("color") String color,
                                                    @RequestParam("type") String type,
                                                    @RequestParam("productName") String productName) {
        Pageable pageable;
        switch (sortBy) {

            case "lowToHigh": {
                pageable = PageRequest.of(page, 16, Sort.by(Sort.Order.asc("price")));
                break;
            }
            case "highToLow": {
                pageable = PageRequest.of(page, 16, Sort.by(Sort.Order.desc("price")));
                break;
            }

            default: {
                pageable = PageRequest.of(page, 16);
            }

        }

        double from = 0;
        double to = 0;

        switch (priceFromTo) {
            case "0-50": {
                from = 0;
                to = 50;
                break;
            }
            case "50-100": {
                from = 50;
                to = 100;
                break;
            }

            case "100": {
                from = 100;
                to = iProductService.getMaxPrice();
                break;
            }
            default:{
                from = 0;
                to = iProductService.getMaxPrice();
                break;
            }

        }

        Page<ProductDTO> productDTOPage = iProductService.getProductsPage(pageable, sortBy, from, to, color, type, productName);
        System.out.println("max " + iProductService.getMaxPrice());

        return new ResponseEntity<>(productDTOPage, HttpStatus.OK);


    }

}
