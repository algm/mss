<template>
  <md-layout class="fill-content">
    <md-layout md-flex md-align="center" md-vertical-align="center">
      <md-card>
        <md-card-area>
          <md-card-header>
            <h1 class="md-title">Iniciar sesión</h1>
            <div class="md-subhead">Selecciona una forma de entrar</div>
          </md-card-header>
          <md-card-actions>
            <md-button class="md-raised bg-facebook" href="/facebook/redirect">Facebook</md-button>
            <md-button class="md-raised bg-google"  href="/google/redirect">Google</md-button>
          </md-card-actions>
        </md-card-area>
      </md-card>
    </md-layout>
  </md-layout>
</template>

<script>
  export default {};
</script>
