FROM rust:latest

WORKDIR /app

RUN cargo install --locked --git https://github.com/DonVicioso/TFG_DAWM.git --branch Diego
RUN mkdir /git
RUN cd /git && git init && git clone https://github.com/DonVicioso/TFG_DAWM.git
RUN mkdir /Front
RUN cp -r /git/TFG_DAWM/ticketburst-front/public /Front
COPY . .


CMD ["TicketBurst"]
