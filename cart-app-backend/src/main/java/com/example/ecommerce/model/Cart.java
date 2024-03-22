package com.example.ecommerce.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;

    private String title;

    private String category;

    private String image;

    private Long price;

    private Long offerPrice;

    private Long quantity;

    private Long product_id;
}
