package com.studentmanagementsystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studentmanagementsystem.model.Student;
import com.studentmanagementsystem.repository.StudentRepository;
import java.util.*;

@RestController
@RequestMapping("/sms")
@CrossOrigin("*")
public class StudentController {
	
	@Autowired
	private StudentRepository repo;
	
	@GetMapping
	public ResponseEntity<String> getFirstPage(){
		return ResponseEntity.ok("Hi Family");
	}
	
	@PostMapping
	public ResponseEntity<Student> createStudent(@RequestBody Student s)
	{
		Student s1=repo.save(s);
		return ResponseEntity.ok(s1);
	}
	
	@GetMapping("/getOne/{id}")
	public ResponseEntity<Student> getOneStudent(@PathVariable int id){
		return ResponseEntity.ok(repo.findById(id).get());
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List<Student>> getAllStudent(){
		return ResponseEntity.ok(repo.findAll());
	}
	
	@PutMapping("/updateStudent/{id}")
	public ResponseEntity<String> updateStudent(@RequestBody Student s, @PathVariable int id){
		if(repo.findById(id)!=null) {
			repo.save(s);
		}
		return ResponseEntity.ok("The data has been updated successfully");
	}
	
	@PatchMapping("/updateValue/{id}")
	public ResponseEntity<Student> updateValueOfStudent(@RequestBody Student s, @PathVariable int id){
		Student exist=repo.findById(id).get();
		if(exist!=null) {
		exist.setId(id);
		if(s.getClass_number()!=0) exist.setClass_number(s.getClass_number());
		if(s.getDomain()!=null) exist.setDomain(s.getDomain());
		if(s.getFather_name()!=null) exist.setFather_name(s.getFather_name());
		if(s.getName()!=null) exist.setName(s.getName());
		repo.save(exist);
		return ResponseEntity.ok(exist);}
		else {
			return ResponseEntity.notFound().build();
		}}
	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteStudent(@PathVariable int id){
		if(repo.findById(id)!=null) {
			repo.deleteById(id);
			return ResponseEntity.ok("Deleted Successfully");
		}
		return ResponseEntity.ok("Not Deleted Successfully");
		
	}
}

