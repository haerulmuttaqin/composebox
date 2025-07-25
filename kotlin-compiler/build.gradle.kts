plugins {
    kotlin("js") version "1.9.22"
    id("org.jetbrains.compose") version "1.6.0"
}

repositories {
    google()
    mavenCentral()
    maven("https://maven.pkg.jetbrains.space/public/p/compose/dev")
}

kotlin {
    js(IR) {
        browser {
            binaries.executable()
        }
    }
    sourceSets["main"].dependencies {
        implementation("org.jetbrains.compose.web:web-core:1.6.0")
        implementation("org.jetbrains.compose.runtime:runtime:1.6.0")
    }
}