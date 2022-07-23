package com.example.demo;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.List;

public class KanbanServiceTest {

    @Test
    void shouldReturnTasks(){
        //Given
        List<Task> tasks = List.of(new Task("Einkaufen", "Brot", TaskStatus.OPEN),
                new Task("Hausaufgaben", "mathematik", TaskStatus.IN_PROGRESS));


        KanbanRepository kanbanRepository = Mockito.mock(KanbanRepository.class);
        Mockito.when(kanbanRepository.findAll()).thenReturn(tasks);

        KanbanService kanbanService = new KanbanService(kanbanRepository);

        //When
        List<Task> actual = kanbanService.findAll();

        //Then
        Assertions.assertThat(actual).hasSize(2);
    }

    @Test
    void shouldCreateNewTask(){

        KanbanRepository kanbanRepository = Mockito.mock(KanbanRepository.class);
        KanbanService kanbanService = new KanbanService(kanbanRepository);
        Task newTask = new Task("NEU", "Beschreibung", TaskStatus.OPEN);
        kanbanService.createTask(newTask);

        Mockito.verify(kanbanRepository).save(newTask);
    }

    @Test
    void shouldDeleteTask(){

        KanbanRepository kanbanRepository = Mockito.mock(KanbanRepository.class);
        KanbanService kanbanService = new KanbanService(kanbanRepository);

        kanbanService.deleteTask("4711");

        Mockito.verify(kanbanRepository).deleteById("4711");

    }
}
