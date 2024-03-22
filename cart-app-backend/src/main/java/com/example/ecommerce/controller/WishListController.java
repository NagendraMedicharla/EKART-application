package com.example.ecommerce.controller;

import com.example.ecommerce.model.WishList;
import com.example.ecommerce.repository.WishListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class WishListController {

    @Autowired
    private WishListRepository wishListRepository;

    @PostMapping("/addToWishList")
    public ResponseEntity<String> addProductToWishList(@RequestBody WishList wishList) {
        wishListRepository.save(wishList);
//        return ResponseEntity.ok("product add to wishlist successfully");
        return new ResponseEntity<>("product added to wishlist", HttpStatus.OK);
    }

    @GetMapping("/{email}/products")
    public ResponseEntity<List<WishList>> getWishlistItemsByEmail(@PathVariable String email) {
        List<WishList> wishListItems = wishListRepository.findByEmail(email);
        return ResponseEntity.ok(wishListItems);
    }

    @DeleteMapping("/{wishListId}/deleteItem")
    public ResponseEntity<String> deleteProductFromWishList(@PathVariable Long wishListId) {
        wishListRepository.deleteById(wishListId);
        return ResponseEntity.ok("Product removed from wishlist");
    }
}
