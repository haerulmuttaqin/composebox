import org.jetbrains.compose.web.dom.*
import org.jetbrains.compose.web.renderComposable

fun main() {
    renderComposable(rootElementId = "root") {
        Div {
            Text("Hello from Compose  Testing!")
            P { Text("Start coding here..." ) }
            Button() {
                Text("test button")
            }
        }
    }
}
