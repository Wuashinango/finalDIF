package com.equipo2.aplicacionfinal

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button

class ActivityInventario : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_inventario)
        val volverMenu = findViewById<Button>(R.id.menu_boton)

        volverMenu.setOnClickListener{
            val intent = Intent(this, ActivityMenuPrincipal::class.java)
            startActivity(intent)
            finish()
        }
        fun onBackPressed() {
            startActivity(Intent(this, ActivityMenuPrincipal::class.java))
        }

    }
}