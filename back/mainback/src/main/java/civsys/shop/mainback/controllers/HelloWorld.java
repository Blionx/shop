package civsys.shop.mainback.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorld {

    @GetMapping("/")
    ResponseEntity holaMundo(){
        return new ResponseEntity("hola mundo",HttpStatus.OK);
    }
}
