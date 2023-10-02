package springapp.backend.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import springapp.backend.model.Customer;
import springapp.backend.repository.CustomerRepo;

@Service
public class CustomerService {
    
    @Autowired
    CustomerRepo customerRepo;

    public Customer create(Customer customer){
       return customerRepo.save(customer);
    }
    public ResponseEntity<Customer> getCustomer(int id){
        Optional<Customer> cus = customerRepo.findById(id);
        try {
            if(cus.isPresent()){
                return new ResponseEntity<>(cus.get(),HttpStatus.OK);
            }
            else{
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }
    public ResponseEntity<List<Customer>> getAllCustomersById(int userId) {
        try {
            Iterable<Customer> all = customerRepo.findAllByUserId(userId);
            List<Customer> list = new ArrayList<>();
            all.forEach(list::add);
            if (list.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND); // or HttpStatus.NO_CONTENT if you want to indicate an empty result
            } else {
                return new ResponseEntity<>(list, HttpStatus.OK);
            }
        } catch (Exception e) {
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }
    public ResponseEntity<HashMap<String,String>> deleteCustomer(int id){
        HashMap<String,String> map = new HashMap<>();
        customerRepo.deleteById(id);
        map.put("status","customer deleted");
        return new ResponseEntity<>(map,HttpStatus.OK);
    }

    public ResponseEntity<HashMap<String,String>> updateCustomer(Customer customer){
        HashMap<String,String> map = new HashMap<>();

        try {
            customerRepo.save(customer);
            map.put("status","updated");
            return new ResponseEntity<>(map, HttpStatus.OK);

        } catch (Exception e) {
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
    
}
    

