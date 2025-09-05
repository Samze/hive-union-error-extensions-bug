# Makefile for GraphQL API with Hive Gateway
.PHONY: install build start stop

# Installation and setup
install: ## Install dependencies
	npm install

# Build operations
build: ## Build the supergraph from OpenAPI spec
	npx mesh-compose -o hive/supergraph.graphqls

start: stop build ## Start both REST and GraphQL servers in background
	@echo "Starting REST API server in background..."
	@npm run server &
	@sleep 2
	@echo "Starting GraphQL Gateway server..."
	@npm start

stop: ## Stop all running servers
	@echo "Stopping all Node.js servers..."
	@pkill -f "node server.js" || true
	@pkill -f "node index.js" || true
	@echo "All servers stopped."
