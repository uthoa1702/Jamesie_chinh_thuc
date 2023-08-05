package com.example.jamesie_be.repository;

import com.example.jamesie_be.model.DTO.IProductDTO;
import com.example.jamesie_be.model.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Products, Long> {

    @Query(value = "SELECT DISTINCT PC.name AS color,\n" +
            "                p.name             AS name,\n" +
            "                p.price            AS price,\n" +
            "                p.description      AS description,\n" +
            "                p.image1           AS image1,\n" +
            "                p.image2           AS image2,\n" +
            "                p.image3           AS image3\n" +
            "FROM products p\n" +
            "INNER JOIN product_color PC ON p.product_color_id = PC.id\n" +
            "WHERE p.is_delete = FALSE\n" +
            "  AND p.amount > 0", nativeQuery = true)
    Page<IProductDTO> getProducts(Pageable pageable);
}
