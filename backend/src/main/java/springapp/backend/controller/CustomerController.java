package springapp.backend.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import springapp.backend.model.Customer;
import springapp.backend.service.CustomerService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CustomerController {
    @Autowired
    CustomerService customerService;

    @PostMapping("/create")
    public Customer create(@RequestBody Customer customer){
        
        return customerService.create(customer);
    }

    @GetMapping("/customerlist")
    public ResponseEntity<Customer> getCustomer(@RequestParam("id") int id){
    return customerService.getCustomer(id);
    }

    @GetMapping("/allCustomersById")
    public ResponseEntity<List<Customer>> getAllCustomersById(@RequestParam("userId") int userId){
    return customerService.getAllCustomersById(userId);
    }

    @DeleteMapping("/deletecustomer")
    public ResponseEntity<HashMap<String,String>> deleteCustomer(@RequestParam("id") int id){
    return customerService.deleteCustomer(id);
    }

    @PutMapping("/updatecustomer")  
    public ResponseEntity<HashMap<String,String>> updateCustomer(@RequestBody Customer customer){
    return customerService.updateCustomer(customer);
    }
}
