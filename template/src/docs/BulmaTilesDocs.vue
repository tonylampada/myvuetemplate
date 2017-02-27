<template>
<div class="container">
    <section class="section">
        <p>Oioioi</p>
    </section>
    <div class="columns">
        <div class="column is-two-thirds">


            <div class="box"> 
                <div class="tile is-ancestor">
                  <div class="tile is-vertical is-8">
                    <div class="tile">
                      <div class="tile is-parent is-vertical">
                        <article class="tile is-child notification is-primary">
                          <p class="title">Vertical...</p>
                          <p class="subtitle">Top tile</p>
                        </article>
                        <article class="tile is-child notification is-warning">
                          <p class="title">...tiles</p>
                          <p class="subtitle">Bottom tile</p>
                        </article>
                      </div>
                      <div class="tile is-parent">
                        <article class="tile is-child notification is-info">
                          <p class="title">Middle tile</p>
                          <p class="subtitle">With an image</p>
                          <figure class="image is-4by3">
                            <img src="http://placehold.it/640x480">
                          </figure>
                        </article>
                      </div>
                    </div>
                    <div class="tile is-parent">
                      <article class="tile is-child notification is-danger">
                        <p class="title">Wide tile</p>
                        <p class="subtitle">Aligned with the right tile</p>
                        <div class="content">
                          <!-- Content -->
                        </div>
                      </article>
                    </div>
                  </div>
                  <div class="tile is-parent">
                    <article class="tile is-child notification is-success">
                      <div class="content">
                        <p class="title">Tall tile</p>
                        <p class="subtitle">With even more content</p>
                        <div class="content">
                          <!-- Content -->
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
            </div>


        </div>
        <div class="column">
            <div class="box"> 

                <div class="tile is-ancestor">
                    <div class="tile is-vertical">
                        <div class="tile is-parent">
                            <article class="tile is-child notification is-primary">
                                <div class="content">
                                    <p class="title">Wide tile</p>
                                    <p class="subtitle">Aligned with the right tile</p>
                                    <div class="content">
                                      <p>Lorem Ipsum sitdolor amet</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <div class="tile is-child notification">
                                <p class="title">Wide tile</p>
                                <p class="subtitle">Aligned with the right tile</p>
                                <div class="content">
                                  <p>Lorem Ipsum sitdolor amet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <div class="tile is-child notification">
                                <p class="title">Wide tile</p>
                                <p class="subtitle">Aligned with the right tile</p>
                                <div class="content">
                                  <p>Lorem Ipsum sitdolor amet</p>
                                </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
  name: 'BulmaTilesDocs',
}
</script>
