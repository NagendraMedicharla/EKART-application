package com.example.ecommerce.controller;

import com.example.ecommerce.model.User;
import com.example.ecommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @PostMapping("/adduser")
    public ResponseEntity<?> addUser(@RequestBody User userData) {
        User user = userRepository.findByEmail(userData.getEmail());
        if (user != null) {
            return ResponseEntity.badRequest().body("User already exists");
        }
        userData.setRole("USER");
        userData.setPassword(passwordEncoder.encode(userData.getPassword()));
        userRepository.save(userData);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
