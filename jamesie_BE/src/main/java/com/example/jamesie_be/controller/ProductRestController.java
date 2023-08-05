package com.example.jamesie_be.controller;

import com.example.jamesie_be.model.DTO.ProductDTO;
import com.example.jamesie_be.model.Products;
import com.example.jamesie_be.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
    public ResponseEntity<Page<ProductDTO>> getList(@RequestParam(value = "page" , defaultValue = "0") Integer page){
        Pageable pageable = PageRequest.of(page,5);
        Page<ProductDTO> productDTOPage = iProductService.getProductsPage(pageable);
        return new ResponseEntity<>(productDTOPage, HttpStatus.OK);



    }

}
