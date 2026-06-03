package com.studentmanagementsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.studentmanagementsystem.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer>{

}
