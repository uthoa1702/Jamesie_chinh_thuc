package com.example.jamesie_be.repository;

import com.example.jamesie_be.model.DTO.IProductDTO;
import com.example.jamesie_be.model.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Products, Long> {

    @Query(value = "SELECT DISTINCT PC.name       AS color,\n" +
            "                p.name        AS name,\n" +
            "                p.price       AS price,\n" +
            "                p.description AS description,\n" +
            "                p.image1      AS image1,\n" +
            "                p.image2      AS image2,\n" +
            "                p.image3      AS image3\n" +
            "\n" +
            "FROM products p\n" +
            "         INNER JOIN product_color PC ON p.product_color_id = PC.id\n" +
            "         INNER JOIN product_type PT ON p.product_type_id = PT.id\n" +
            "WHERE p.is_delete = FALSE\n" +
            "  AND p.amount > 0\n" +
            "  AND price BETWEEN :from AND :to\n" +
            "  AND PC.name like :color \n" +
            "  AND PT.name like :type\n" +
            "  AND p.name LIKE :productName", nativeQuery = true)
    Page<IProductDTO> getProducts(Pageable pageable,

                                  @Param("from") double from,
                                  @Param("to") double to,
                                  @Param("color") String color,
                                  @Param("type") String type,
                                  @Param("productName") String productName);


    @Query(value = "SELECT MAX(price)\n" +
            "FROM products\n" +
            "WHERE is_delete = FALSE\n" +
            "  AND amount > 0", nativeQuery = true)
    Double getMaxPrice();
}
