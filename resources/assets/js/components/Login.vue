<template>
  <md-app>
    <md-app-content class="fill-content" md-flex md-align="center" md-vertical-align="center">
      <md-card>
        <md-card-area>
          <md-card-header>
            <h1 class="md-title">Iniciar sesión</h1>
            <div class="md-subhead">Selecciona una forma de entrar</div>
          </md-card-header>
          <md-card-content>
            <md-button class="md-dense bg-facebook" href="/facebook/redirect">Facebook</md-button>
            <md-button class="md-dense bg-google"  href="/google/redirect">Google</md-button>
          </md-card-content>
        </md-card-area>
      </md-card>
    </md-app-content>
  </md-app>
</template>

<script>
  export default {};
</script>
