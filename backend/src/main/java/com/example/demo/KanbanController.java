package com.example.demo;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/Kanban")
public class KanbanController {

    @GetMapping
    public List<Task> getTasks(){
        return null;

    }

}
