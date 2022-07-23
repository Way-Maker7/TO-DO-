package com.example.demo;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class KanbanService {

    private final KanbanRepository kanbanRepository;

    public List<Task> findAll() {

        return kanbanRepository.findAll();
    }

    public void createTask(Task task) {
        kanbanRepository.save(task);
    }

    public void deleteTask(String taskId) {
         kanbanRepository.deleteById(taskId);
    }

    public void promoteTask(Task taskToEdit) {
       kanbanRepository.findById(taskToEdit.getId())
               .map(taskFromDB -> {
                   taskFromDB.setStatus(taskFromDB.getStatus().next());
                   return taskFromDB;
               })
               .ifPresent(kanbanRepository::save);
    }
}
