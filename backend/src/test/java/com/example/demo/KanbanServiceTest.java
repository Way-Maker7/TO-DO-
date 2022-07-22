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
}
