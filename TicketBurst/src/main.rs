use std::net::TcpListener;
use TicketBurst::run;

#[tokio::main]
async fn main() -> std::io::Result<()> {
    let listener = TcpListener::bind("0.0.0.0:3000").unwrap();
    run(listener)?.await
}
