package com.example.demo;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;


@Repository
public class KanbanRepository {

    private List<Task> tasks = new ArrayList<>();

    public List<Task> findAll() {

        return tasks;
    }

    public void save(Task task) {
        tasks.add(task);
    }

    public void deleteById(String id) {
        Optional<Task> found =
        tasks.stream().filter(task -> Objects.equals(task.getId(),id))
                .findFirst();

        if(found.isPresent()){
            tasks.remove(found.get());
        }
    }
}
