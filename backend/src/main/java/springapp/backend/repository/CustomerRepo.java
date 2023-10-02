package springapp.backend.repository;

import org.springframework.data.repository.CrudRepository;

import springapp.backend.model.Customer;

public interface CustomerRepo extends CrudRepository<Customer,Integer> {
    Iterable<Customer> findAllByUserId(int userId);
}
