use std::net::TcpListener;
use actix_cors::Cors;
use actix_files::Files;
use actix_web::dev::Server;
use actix_web::{App, http, HttpServer};

pub fn run(listener: TcpListener) -> Result<Server, std::io::Error> {
    let server = HttpServer::new(|| {
        App::new()
            .wrap(
                Cors::default()
                    .allowed_origin("http://proxy:3000")
                    .allowed_origin("https://proxy:3000") // Origen permitido
                    .allowed_methods(vec!["GET", "POST"]) // Métodos permitidos
                    .allowed_headers(vec![http::header::AUTHORIZATION, http::header::ACCEPT])
                    .allowed_header(http::header::CONTENT_TYPE)
                    .max_age(3600) // Opcional (pre-flight)
            )
            .service(Files::new("/", "./Front").index_file("index.html"))
    })
        .listen(listener)?
        .run();
    Ok(server)
}