package springapp.backend.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import springapp.backend.model.User;

public interface UserRepo extends CrudRepository<User,Integer> {
    public Optional<User> findByEmail(String email);
}
