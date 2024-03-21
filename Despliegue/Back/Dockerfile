FROM rust:1.64.0-alpine

WORKDIR /app

RUN cargo install --locked --git https://github.com/DonVicioso/TFG_DAWM.git --path TicketBurst --rev Diego

COPY . .


CMD ["TicketBurst"]
