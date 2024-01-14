package com.narstudio.studentscourse.student.api;

import com.narstudio.studentscourse.student.enums.GenderEnum;
import com.narstudio.studentscourse.student.model.Student;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("v1/students")
public class StudentController {

    @GetMapping
    public List<Student> getAllStudents() {
        return List.of(
                new Student(
                        UUID.randomUUID(),
                        "Jasnah",
                        "Kholin",
                        "cosmere@sanderson.com",
                        GenderEnum.FEMALE),
                new Student(
                        UUID.randomUUID(),
                        "Dalinar",
                        "Kholin",
                        "cosmere@sanderson.com",
                        GenderEnum.MALE));
    }
}
