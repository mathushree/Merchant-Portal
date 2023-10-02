package springapp.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springapp.backend.model.User;
import springapp.backend.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/customer")
public class UserController {
@Autowired
public UserService userService;

@PostMapping("/signup")
public User signup(@RequestBody User user){
   return userService.signup(user);
}
@PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user){
        return userService.login(user);
    }


    }


