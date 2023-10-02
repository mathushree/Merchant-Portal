package springapp.backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import springapp.backend.model.User;
import springapp.backend.repository.UserRepo;

@Service
public class UserService {
    @Autowired
    UserRepo userRepo;

    public User signup(User user){
        return  userRepo.save(user);
    }

    public ResponseEntity<User> login(User user){
        Optional<User> data = userRepo.findByEmail(user.getEmail());
        User obj;
        try {
            obj=data.get();
            if(obj.getPassword().equals(user.getPassword())){
                return new ResponseEntity<>(obj,HttpStatus.OK);
            }
            else{
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            obj= new User();
        }
        return new ResponseEntity<>(obj,HttpStatus.UNAUTHORIZED);
    }

}
