<template>
    <Transition name="modal-animation">
        <div v-if="modalActive" class="mainModal" style="align-items: center ;">
            <div @click="close" class="modalOverlay"> X </div>
            <div class="modalContent iris" :class="randomNumber">
                <div @click="close" class="closeButton">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <slot></slot>
            </div>
        </div>
    </Transition>
</template>

<script>
import { Transition } from 'vue';

export default {
    props: ["modalActive"],
    data() {
        return {
            randomNumber: 1
        }
    },
    methods: {
        close() {
            this.$emit("close");            
        },
        randomColor() {
            this.randomNumber = 'f' + Math.floor((Math.random() * 9))
        },
    },
    components: { Transition },
    mounted() {
        this.randomColor()
    }
}
</script>

<style lang="css">
.mainModal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;

    .modalContent {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80%;
        max-width: 550px;
        padding: 20px;
        transform: translate(-50%, -50%);
        background-color: var(--iris-color1);

        h5 {
            width: calc(100% - 60px);
        }

        h3,
        h5 {
            font-weight: normal;
            margin: 0;
        }

        .closeButton {
            position: absolute;
            top: 20px;
            right: 20px;
            text-align: center;
            cursor: pointer;
            font-size: 24px;
        }

        .details {
            margin: 20px 0;

            li {
                list-style: none;
                text-align: right;
            }
        }

        .buttons {
            margin: 30px 0 20px;
            text-align: center;

        }
    }

}

.modalOverlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}

.modal-animation-enter-active,
.modal-animation-leave-active {
    transition: opacity .3s ease-in-out;
}

.modal-animation-enter-from,
.modal-animation-leave-to {
    opacity: 0;
}

.modal-info-enter-active,
.modal-info-leave-active {
    transition: all .2s ease-in-out;
}

.modal-info-delay-enter-active,
.modal-info-delay-leave-active {
    transition: all .2s ease-in-out;
    transition-delay: .4s;
}

.modal-info-enter-from,
.modal-info-leave-to,
.modal-info-delay-enter-from,
.modal-info-delay-leave-to {
    opacity: 0;
    transform: translateX(5%);
}
</style>