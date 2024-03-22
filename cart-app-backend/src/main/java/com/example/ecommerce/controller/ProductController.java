package com.example.ecommerce.controller;

import com.example.ecommerce.model.Product;
import com.example.ecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/products/{category}")
    public ResponseEntity<List<Product>> getProductByCategory(@PathVariable String category){
        List<Product> products = productRepository.findByCategory(category);
        if(products.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(products,HttpStatus.OK);
    }

    @GetMapping("/products/all")
    public ResponseEntity<List<Product>> getAllProducts(){
        List<Product> products = productRepository.findAll();
        if(products.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(products,HttpStatus.OK);
    }

    @PostMapping("/products/add")
    public ResponseEntity<List<Product>> saveProducts(@RequestBody List<Product> products){
        List<Product> savedProducts = productRepository.saveAll(products);
        return new ResponseEntity<>(savedProducts, HttpStatus.CREATED);
    }

    @PostMapping("/products/addsingle")
    public ResponseEntity<Product> saveSingleProduct(@RequestBody Product product){
        Product savedProduct = productRepository.save(product);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }


}
