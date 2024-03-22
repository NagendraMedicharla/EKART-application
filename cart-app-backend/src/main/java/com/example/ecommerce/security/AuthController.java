package com.example.ecommerce.security;



import com.example.ecommerce.security.model.JwtRequest;
import com.example.ecommerce.security.model.JwtResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", allowCredentials = "true")
public class AuthController {

	@Autowired
	private CustomUserDetailService customUserDetailService;

	@Autowired
	private JwtUtilTokenHelper jwtUtilTokenHelper;

	@Autowired
	private AuthenticationManager authenticationManager;


	@PostMapping("/login")
	public ResponseEntity<JwtResponse> createToken(@RequestBody JwtRequest jwtRequest) throws Exception {
		try {
			this.authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(jwtRequest.getEmail(), jwtRequest.getPassword()));
			System.out.println(jwtRequest.getEmail());
			System.out.println(jwtRequest.getPassword());
		} catch (UsernameNotFoundException e) {
//			e.printStackTrace();
			throw new Exception("User Not Found Exception");
		} catch (BadCredentialsException e) {
//			e.printStackTrace();
			throw new Exception("Bad Credential");
		}

		UserDetails userDetails = this.customUserDetailService.loadUserByUsername(jwtRequest.getEmail());
		String token = this.jwtUtilTokenHelper.generateToken(userDetails);
		System.err.println(token);
		System.out.println(token);
		return ResponseEntity.ok(new JwtResponse(token));


	}

}
