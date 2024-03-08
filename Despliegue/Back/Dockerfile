FROM rust:1.64.0-alpine

WORKDIR /app

RUN cargo install --locked --git https://github.com/DonVicioso/TFG_DAWM/tree/fc7c069ca061d1b1351d436bc713d426c933a7b5/Pruebas/build

COPY . .

CMD ["cargo", "run"]
