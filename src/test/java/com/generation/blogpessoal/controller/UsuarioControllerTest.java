package com.generation.blogpessoal.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Optional;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpEntity;

import com.generation.blogpessoal.model.Usuario;
import com.generation.blogpessoal.repository.UsuarioRepository;
import com.generation.blogpessoal.service.UsuarioService;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class UsuarioControllerTest {
	
	@Autowired
	private TestRestTemplate testRestTemplate;
	
	@Autowired
	private UsuarioService usuarioService;
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@BeforeAll
	void start() {
		usuarioRepository.deleteAll();
		usuarioService.cadastrarUsuario(new Usuario(0L,"Root","root@root.com","rootroot"," "));
	}
	
	@Test
	@DisplayName("Cadastrar um Usuario")
	public void deveCriarUmUsuario() {
		HttpEntity<Usuario> corpoRequisicao = new HttpEntity<Usuario>(new Usuario(0L,"Raul","raul.raul@raul.com","12345678"," "));
		ResponseEntity<Usuario> corpoResposta = testRestTemplate.exchange("/usuarios/cadastrar", HttpMethod.POST,corpoRequisicao,Usuario.class);
		
		assertEquals(HttpStatus.CREATED,corpoResposta.getStatusCode());
	}
	
	@Test
	@DisplayName("Não deve duplicar o usuário")
	public void naoDeveDuplicarUsuario() {
		usuarioService.cadastrarUsuario(new Usuario(0L,"Sofia","sofia@sofia.com","12345678"," "));
		HttpEntity<Usuario> corpoRequisicao = new HttpEntity<Usuario> (new Usuario(0L,"Sofia","sofia@sofia.com","12345678"," "));
		ResponseEntity<Usuario> corpoResposta = testRestTemplate.exchange("/usuarios/cadastrar",HttpMethod.POST,corpoRequisicao,Usuario.class);
		
		assertEquals(HttpStatus.BAD_REQUEST,corpoResposta.getStatusCode());
	}
	
	@Test
	@DisplayName("Fazer a atualização de um usuário")
	public void deveAtualizarUsuario() {
		Optional<Usuario> usuarioCadastrado = usuarioService.cadastrarUsuario(new Usuario(0L,"Giovanni","giovanni@giovanni.com","12345678"," "));
		Usuario usuarioUpdate = new Usuario(usuarioCadastrado.get().getId(),"Giovanni Dias","giovanni_dias@giovanni.com","12345678"," ");
		
		HttpEntity<Usuario> corpoRequisicao = new HttpEntity<Usuario>(usuarioUpdate);
		ResponseEntity<Usuario> corpoResposta = testRestTemplate
				.withBasicAuth("root@root.com", "rootroot")
				.exchange("/usuarios/atualizar", HttpMethod.PUT,corpoRequisicao,Usuario.class);
		assertEquals(HttpStatus.OK,corpoResposta.getStatusCode());
	}
	
	@Test
	@DisplayName("Listar todos os usuários")
	public void deveMostrarTodosUsuarios() {
		usuarioService.cadastrarUsuario(new Usuario(0L,"Gustavo Zambon","gustavo_zambon@enois.com","12345678"," "));
		usuarioService.cadastrarUsuario(new Usuario(0L,"Ramon Siqueira","ramon_siqueira@enois.com","12345678"," "));
		
		ResponseEntity<String> resposta = testRestTemplate
				.withBasicAuth("root@root.com", "rootroot")
				.exchange("/usuarios/all", HttpMethod.GET,null,String.class);
		
		assertEquals(HttpStatus.OK,resposta.getStatusCode());
		
	}

}
