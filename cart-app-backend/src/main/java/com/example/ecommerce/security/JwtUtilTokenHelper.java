package com.example.ecommerce.security;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;


@Component
public class JwtUtilTokenHelper {

	public static final long JWT_TOKEN_VALIDITY = 1 * 60 * 60;

//	private String secret = "health";

	private String secret = "cartapplictionhealthcareasdfghjklnbvcdfyudfghjkdcvbnmkmnvcxdfghjkcxdfyukmvbncfghjkxcvbnsdfghjdfghjdfghxcvbn";

	public String getUserEmailFromToken(String token) {
		return getClaimFromToken(token, Claims::getSubject);
	}

	public Date getExpirationDateFromToken(String token) {
		return getClaimFromToken(token, Claims::getExpiration);
	}

	public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = getAllClaimsFromToken(token);
		return claimsResolver.apply(claims);
	}

	private Claims getAllClaimsFromToken(String token) {
		return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
	}

	private Boolean isTokenExpired(String token) {
		final Date expiration = getExpirationDateFromToken(token);
		return expiration.before(new Date());
	}

	public String generateToken(UserDetails userDetails) {
		Map<String, Object> claims = new HashMap<>();
		return doGenerateToken(claims, userDetails.getUsername());
	}

	private String doGenerateToken(Map<String, Object> Claims, String subject) {
		return Jwts.builder().setClaims(Claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000))
				.signWith(SignatureAlgorithm.HS256, secret).compact();
	}

	public Boolean ValidateToken(String token, UserDetails userDetails) {
		final String userEmail = getUserEmailFromToken(token);
		return (userEmail.equals(userDetails.getUsername()) && !isTokenExpired(token));
	}

}
