package com.example.ecommerce.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String title;

    private String category;

    private String image;

    @Column(length = 7000)
    private String description;

    private  Long price;

    private Long offerPrice;

}
