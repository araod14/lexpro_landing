IMAGE    := lexpro-landing
TAG      := latest
PORT     := 3000
REGISTRY :=   # ej: docker.io/miusuario o ghcr.io/miorg

.PHONY: help dev build start lint \
        docker-build docker-run docker-stop docker-push \
        up down logs clean

help: ## Muestra esta ayuda
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
	  awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-18s\033[0m %s\n", $$1, $$2}'

# ── Desarrollo local ──────────────────────────────────────────────────────────

dev: ## Inicia el servidor de desarrollo (http://localhost:3000)
	npm run dev

build: ## Compila la aplicación para producción
	npm run build

start: ## Sirve el build de producción localmente
	npm run start

lint: ## Ejecuta el linter
	npm run lint

# ── Docker (imagen standalone) ────────────────────────────────────────────────

docker-build: ## Construye la imagen Docker
	docker build -t $(IMAGE):$(TAG) .

docker-run: ## Ejecuta el contenedor en segundo plano
	docker run -d \
	  --name $(IMAGE) \
	  -p $(PORT):3000 \
	  --restart unless-stopped \
	  $(IMAGE):$(TAG)

docker-stop: ## Detiene y elimina el contenedor
	docker stop $(IMAGE) && docker rm $(IMAGE)

docker-push: ## Publica la imagen en el registry configurado
	@if [ -z "$(REGISTRY)" ]; then \
	  echo "ERROR: define REGISTRY en el Makefile o con make docker-push REGISTRY=..."; exit 1; \
	fi
	docker tag $(IMAGE):$(TAG) $(REGISTRY)/$(IMAGE):$(TAG)
	docker push $(REGISTRY)/$(IMAGE):$(TAG)

# ── Docker Compose ────────────────────────────────────────────────────────────

up: ## Levanta el stack con docker compose (build incluido)
	docker compose up -d --build

down: ## Detiene y elimina los contenedores
	docker compose down

logs: ## Sigue los logs del contenedor web
	docker compose logs -f web

clean: ## Elimina contenedores, imágenes locales y volúmenes
	docker compose down --rmi local --volumes --remove-orphans
