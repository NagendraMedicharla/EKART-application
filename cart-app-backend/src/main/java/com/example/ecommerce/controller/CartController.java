package com.example.ecommerce.controller;

import com.example.ecommerce.model.Cart;
import com.example.ecommerce.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CartController {
    @Autowired
    private CartRepository cartRepository;

    @PostMapping("/add")
    public ResponseEntity<String> SaveItems(@RequestBody Cart cart) {
        cartRepository.save(cart);
//        LOGGER.info("Adding items into cart");
        return ResponseEntity.ok("Product added to cart successfully");
    }

    @GetMapping("/getcartlist/{email}")
    public ResponseEntity<List<Cart>> fetchCartByEmail(@PathVariable String email) {
        List<Cart> cartList = cartRepository.findByEmail(email);
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(cartList);
    }

    @DeleteMapping("/delete/{cartId}")
    public ResponseEntity<String> deleteCartItemByProduct(@PathVariable Long cartId) {
        cartRepository.deleteById(cartId);
        return ResponseEntity.ok("Product deleted from cart successfully");
    }

    @PutMapping("/editcartItem/{cartId}/{qty}")
    public ResponseEntity<String> updateCartItem(@PathVariable Long cartId, @PathVariable Long qty){
        Cart cartItem = cartRepository.getById(cartId);
        cartItem.setQuantity(qty);
        cartRepository.save(cartItem);
        return ResponseEntity.ok("Updated cart item successfully");
    }
}
