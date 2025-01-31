const express = require('express');
const axios = require('axios');
const router = express.Router();
const consultas = require('../models/consultas');
const EventoActividad = require('../models/eventosActividades');
const Lead = require('../models/leads');
const Cotizacion = require('../models/cotizacion');
const Contrato = require('../models/contrato');
const Inventario = require('../models/inventario');
const Proyecto = require('../models/proyecto');
const Campanas = require('../models/campanas');
const TicketsSoporte = require('../models/ticketsSoporte');
const Tarea = require('../models/tarea');
const Cliente = require('../models/Cliente');
const GestionDePedidos = require('../models/gestiondepedidos');
const multer = require('multer'); //



router.post('/tablero', async (req, res) => {
    console.log("hola")
    res.json("exito");
});

router.get('/anzony', async (req, res) => {

    res.json("exito ANZONY!!!");
});

// Crear un nuevo evento/actividad
router.post('/eventosActividades', async (req, res) => {
    console.log("Creacion de Evento");
    try {
        const nuevoEvento = new EventoActividad(req.body);
        await nuevoEvento.save();
        res.status(201).json({ message: 'Evento/Actividad creado con éxito', data: nuevoEvento });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el Evento/Actividad', error });
    }
});

// Obtener un evento/actividad específico por ID
router.get('/eventosActividades/:id', async (req, res) => {
    try {
        const lead = await EventoActividad.findById(req.params.id);
        if (!lead) {
            return res.status(404).json({ message: 'Evento o Actividad no encontrado' });
        }
        res.status(200).json(lead);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el Evento o Actividad', error });
    }
});

// Obtener lista de todos los eventos/actividades
router.get('/eventosActividades', async (req, res) => {
    try {
        const eventos = await EventoActividad.find();
        res.status(200).json(eventos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los eventos/actividades', error });
    }
});

// Eliminar un evento o actividad por ID
router.delete('/eventosActividades/:id', async (req, res) => {
    try {
        const eventoEliminado = await EventoActividad.findByIdAndDelete(req.params.id);
        if (!eventoEliminado) {
            return res.status(404).json({ message: 'Evento o actividad no encontrado' });
        }
        res.status(200).json({ message: 'Evento o actividad eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el evento o actividad', error });
    }
});

// Editar un evento/actividad existente
router.post('/eventosActividades/:id', async (req, res) => {
    console.log("Editar evento & actividad")
    console.log(req.body)
    try {
        const eventoActualizado = await EventoActividad.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!eventoActualizado) {
            return res.status(404).json({ message: 'Evento/Actividad no encontrado' });
        }
        res.status(200).json({ message: 'Evento/Actividad actualizado con éxito', data: eventoActualizado });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el Evento/Actividad', error });
    }
});

// Crear un nuevo lead
router.post('/leads', async (req, res) => {
    console.log("Crear Leads")
    try {
        const nuevoLead = new Lead(req.body);
        await nuevoLead.save();
        res.status(201).json({ message: 'Lead creado con éxito', data: nuevoLead });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el Lead', error });
    }
});

// Obtener un lead específico por ID
router.get('/leads/:id', async (req, res) => {
    try {
        const lead = await Lead.findById(req.params.id);
        if (!lead) {
            return res.status(404).json({ message: 'Lead no encontrado' });
        }
        res.status(200).json(lead);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el Lead', error });
    }
});

// Editar un lead existente
router.post('/leads/:id', async (req, res) => {
    console.log("Editar Leads")
    try {
        const leadActualizado = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!leadActualizado) {
            return res.status(404).json({ message: 'Lead no encontrado' });
        }
        res.status(200).json({ message: 'Lead actualizado con éxito', data: leadActualizado });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el Lead', error });
    }
});

// Eliminar un lead por ID
router.delete('/leads/:id', async (req, res) => {
    try {
        const leadEliminado = await Lead.findByIdAndDelete(req.params.id);
        if (!leadEliminado) {
            return res.status(404).json({ message: 'Lead no encontrado' });
        }
        res.status(200).json({ message: 'Lead eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el lead', error });
    }
});

// Obtener lista de todos los leads
router.get('/leads', async (req, res) => {
    try {
        const leads = await Lead.find();
        res.status(200).json(leads);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los leads', error });
    }
});

// Crear una nueva cotización
router.post('/cotizaciones', async (req, res) => {
    try {
        const nuevaCotizacion = new Cotizacion(req.body);
        await nuevaCotizacion.save();
        res.status(201).json({ message: 'Cotización creada con éxito', data: nuevaCotizacion });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la Cotización', error });
    }
});

// Obtener una cotización específica por ID
router.get('/cotizaciones/:id', async (req, res) => {
    try {
        const cotizacion = await Cotizacion.findById(req.params.id);
        if (!cotizacion) {
            return res.status(404).json({ message: 'Cotización no encontrada' });
        }
        res.status(200).json(cotizacion);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la Cotización', error });
    }
});


// Editar una cotización existente
router.post('/cotizaciones/:id', async (req, res) => {
    try {
        const cotizacionActualizada = await Cotizacion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!cotizacionActualizada) {
            return res.status(404).json({ message: 'Cotización no encontrada' });
        }
        res.status(200).json({ message: 'Cotización actualizada con éxito', data: cotizacionActualizada });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la Cotización', error });
    }
});

// Eliminar una cotización por ID
router.delete('/cotizaciones/:id', async (req, res) => {
    try {
        const cotizacionEliminada = await Cotizacion.findByIdAndDelete(req.params.id);
        if (!cotizacionEliminada) {
            return res.status(404).json({ message: 'Cotización no encontrada' });
        }
        res.status(200).json({ message: 'Cotización eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la cotización', error });
    }
});

// Obtener lista de todas las cotizaciones
router.get('/cotizaciones', async (req, res) => {
    try {
        const cotizaciones = await Cotizacion.find({}, 'nombre telefono empresa correo fechaCreacion totalGeneral estado');
        res.status(200).json(cotizaciones);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las cotizaciones', error });
    }
});

// Aprobar una cotización y desaprobar las demás del mismo cliente
router.patch('/cotizaciones/:id/aprobar', async (req, res) => {
    try {
      const { id } = req.params;
      
      // Encontrar la cotización a aprobar
      const cotizacionAprobada = await Cotizacion.findById(id);
      if (!cotizacionAprobada) {
        return res.status(404).json({ message: 'Cotización no encontrada' });
      }
  
      // Aprobar la cotización seleccionada
      cotizacionAprobada.estado = 'aprobada';
      await cotizacionAprobada.save();
  
      // Desaprobar las demás cotizaciones del mismo cliente
      await Cotizacion.updateMany(
        { 
          nombre: cotizacionAprobada.nombre, 
          empresa: cotizacionAprobada.empresa, 
          _id: { $ne: id }  // Excluir la cotización aprobada
        },
        { estado: 'desaprobada', motivoDesaprobacion: 'Otra cotización fue aprobada' }
      );
  
      res.status(200).json({ message: 'Cotización aprobada y las demás fueron desaprobadas.' });
    } catch (error) {
      console.error("Error al aprobar la cotización:", error);
      res.status(500).json({ message: 'Error al aprobar la cotización', error });
    }
  });
  

// Obtener cotizaciones filtradas
router.post('/reportecotizacion', async (req, res) => {
    const { empresa, fechaCreacion, estado, producto } = req.body;

    try {
        let filtros = {};

        if (empresa) filtros.empresa = { $regex: new RegExp(empresa, 'i') };
        if (fechaCreacion) filtros.fechaCreacion = { $gte: new Date(fechaCreacion) };
        if (estado) filtros.estado = estado;
        if (producto) filtros.items = { $elemMatch: { descripcion: { $regex: new RegExp(producto, 'i') } } };

        // Obtener todas las cotizaciones que coincidan con los filtros
        const cotizaciones = await Cotizacion.find(filtros);
        
        // Devolver todas las cotizaciones con todos los campos
        res.status(200).json(cotizaciones);
    } catch (error) {
        console.error('Error al obtener cotizaciones:', error);
        res.status(500).json({ message: 'Error al obtener las cotizaciones', error });
    }
});





//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Crear un nuevo contrato
router.post('/contratos', async (req, res) => {
    console.log("Crear Contrato");
    try {
        const nuevoContrato = new Contrato(req.body);
        await nuevoContrato.save();
        res.status(201).json({ message: 'Contrato creado con éxito', data: nuevoContrato });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el Contrato', error });
    }
  });
  
  // Obtener un contrato específico por ID
  router.get('/contratos/:id', async (req, res) => {
      try {
          const contrato = await Contrato.findById(req.params.id);
          if (!contrato) {
              return res.status(404).json({ message: 'Contrato no encontrado' });
          }
          res.status(200).json(contrato);
      } catch (error) {
          res.status(500).json({ message: 'Error al obtener el Contrato', error });
      }
  });
  
  // Editar un contrato existente
  router.post('/contratos/:id', async (req, res) => {
    console.log("Editar Contrato");
    try {
        const contratoActualizado = await Contrato.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!contratoActualizado) {
            return res.status(404).json({ message: 'Contrato no encontrado' });
        }
        res.status(200).json({ message: 'Contrato actualizado con éxito', data: contratoActualizado });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el Contrato', error });
    }
  });
  
  // Obtener lista de todos los contratos
  router.get('/contratos', async (req, res) => {
    try {
      const contratos = await Contrato.find();
      res.status(200).json(contratos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los contratos', error });
    }
  });

  // Crear un nuevo proyecto
router.post('/proyectos', async (req, res) => {
    console.log("Crear Proyecto");
    try {
        const nuevoProyecto = new Proyecto(req.body);
        await nuevoProyecto.save();
        res.status(201).json({ message: 'Proyecto creado con éxito', data: nuevoProyecto });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el Proyecto', error });
    }
});

// Obtener un proyecto específico por ID
router.get('/proyectos/:id', async (req, res) => {
    try {
        const proyecto = await Proyecto.findById(req.params.id);
        if (!proyecto) {
            return res.status(404).json({ message: 'Proyecto no encontrado' });
        }
        res.status(200).json(proyecto);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el Proyecto', error });
    }
});

// Editar un proyecto existente
router.put('/proyectos/:id', async (req, res) => {
    console.log("Editar Proyecto");
    try {
        const proyectoActualizado = await Proyecto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!proyectoActualizado) {
            return res.status(404).json({ message: 'Proyecto no encontrado' });
        }
        res.status(200).json({ message: 'Proyecto actualizado con éxito', data: proyectoActualizado });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el Proyecto', error });
    }
});

// Obtener lista de todos los proyectos
router.get('/proyectos', async (req, res) => {
    try {
        const proyectos = await Proyecto.find();
        res.status(200).json(proyectos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los proyectos', error });
    }
});

// Crear un nuevo producto en el inventario
router.post('/inventarios', async (req, res) => {
    console.log("Crear Producto en Inventario");
    try {
        const nuevoProducto = new Inventario(req.body);
        await nuevoProducto.save();
        res.status(201).json({ message: 'Producto creado con éxito', data: nuevoProducto });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el producto en el inventario', error });
    }
});

// Obtener un producto específico por ID
router.get('/inventarios/:id', async (req, res) => {
    try {
        const producto = await Inventario.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el producto', error });
    }
});

// Editar un producto existente en el inventario
router.post('/inventarios/:id', async (req, res) => {
    console.log("Editar Producto en Inventario");
    try {
        const productoActualizado = await Inventario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!productoActualizado) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(200).json({ message: 'Producto actualizado con éxito', data: productoActualizado });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el producto en el inventario', error });
    }
});

// Obtener lista de todos los productos en el inventario
router.get('/inventarios', async (req, res) => {
    try {
        const inventario = await Inventario.find();
        res.status(200).json(inventario);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los productos del inventario', error });
    }
});


  router.post('/followupcontracts', async (req, res) => {
    try {
        const nuevaFollowUpContracts = new FollowUpContracts(req.body);
        await nuevaFollowUpContracts.save();
        res.status(201).json({ message: 'Cotización creada con éxito', data: nuevaFollowUpContracts });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la Cotización', error });
    }
  });

  // Obtener un seguimiento de contrato específico por ID
router.get('/followupcontracts/:id', async (req, res) => {
    try {
        const followUpContract = await FollowUpContracts.findById(req.params.id);
        if (!followUpContract) {
            return res.status(404).json({ message: 'Seguimiento no encontrada' });
        }
        res.status(200).json(followUpContract);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el seguimiento', error });
    }
});

// Editar un seguimiento de contrato existente
router.put('/followupcontracts/:id', async (req, res) => {
    try {
        const followUpContractActualizado = await FollowUpContracts.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!followUpContractActualizado) {
            return res.status(404).json({ message: 'Cotización no encontrada' });
        }
        res.status(200).json({ message: 'Seguimiento actualizada con éxito', data: followUpContractActualizado });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el seguimiento', error });
    }
});
  

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Crear una nueva campaña
router.post('/campanas', async (req, res) => {
    console.log("Crear Campaña");
    try {
      const nuevaCampanas = new Campanas(req.body);
      await nuevaCampanas.save();
      res.status(201).json({ message: 'Campaña creada con éxito', data: nuevaCampanas });
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la Campaña', error });
    }
  });
  
  // Obtener una campaña específica por ID
  router.get('/campanas/:id', async (req, res) => {
    try {
      const campanas = await Campanas.findById(req.params.id);
      if (!campanas) {
        return res.status(404).json({ message: 'Campaña no encontrada' });
      }
      res.status(200).json(campanas);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la Campaña', error });
    }
  });
  
  // Editar una campaña existente
  router.put('/campanas/:id', async (req, res) => {
    console.log("Editar Campaña");
    try {
      const campanaActualizada = await Campanas.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!campanaActualizada) {
        return res.status(404).json({ message: 'Campaña no encontrada' });
      }
      res.status(200).json({ message: 'Campaña actualizada con éxito', data: campanaActualizada });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la Campaña', error });
    }
  });
  
  
  // Obtener lista de todas las campañas
  router.get('/campanas-dashboard', async (req, res) => {
    try {
      const campanas = await Campanas.find();
  
      const campanasStatus = {}
      for (let campana of campanas) {
        if (!campanasStatus[campana.estado]) {
          campanasStatus[campana.estado] = []
        }
        campanasStatus[campana.estado].push(campana)
      }
  
      const campanasType = {}
      for (let campana of campanas) {
        if (!campanasType[campana.tipo]) {
          campanasType[campana.tipo] = []
        }
        campanasType[campana.tipo].push(campana)
      }
  
      const response = {
        estado: campanasStatus,
        tipo: campanasType
      }
  
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las campañas', error });
    }
  });
  
  // Obtener campa;as para el reporte
  router.get('/campanas-reporte', async (req, res) => {
    console.log("req", req.query);
    try {
  
      let params = {}
      if (!!req.query.estado) {
        params = {
          ...params,
          estado: req.query.estado
        }
      }
      if (!!req.query.tipo) {
        params = {
          ...params,
          tipo: req.query.tipo
        }
      }
      if (!!req.query.publicoObjetivo) {
        params = {
          ...params,
          publicoObjetivo: req.query.publicoObjetivo
        }
      }
      if (!!req.query.fechaCreacion) {
        params = {
          ...params,
          fechaCreacion: new Date(req.query.fechaCreacion)
        }
      }
  
      const campanas = await Campanas.find(params);
      res.status(200).json(campanas);
    } catch (error) {
      console.log('error', error)
      res.status(500).json({ message: 'Error al obtener las campañas', error });
    }
  });
  
  // Obtener lista de todas las campañas
  router.get('/campanas', async (req, res) => {
    try {
      const campanas = await Campanas.find();
      res.status(200).json(campanas);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las campañas', error });
    }
  });
  
  
  // Eliminar una campaña existente
  router.delete('/campanas/:id', async (req, res) => {
    console.log("Eliminar Campaña");
    try {
      const campanaEliminada = await Campanas.findByIdAndDelete(req.params.id);
      if (!campanaEliminada) {
        return res.status(404).json({ message: 'Campaña no eliminada' });
      }
      res.status(200).json({ message: 'Campaña eliminada', data: campanaEliminada });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la Campaña', error });
    }
  });
  
  // Crear un nuevo ticket de soporte
  router.post('/ticketsSoporte', async (req, res) => {
    console.log("Crear Ticket de Soporte");
    try {
      const nuevoTicket = new TicketsSoporte(req.body);
      await nuevoTicket.save();
      res.status(201).json({ message: 'Ticket de soporte creado con éxito', data: nuevoTicket });
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el Ticket de Soporte', error });
    }
  });
  
  // Obtener lista de todas las campañas
  router.get('/tickets-dashboard', async (req, res) => {
    try {
      const tickets = await TicketsSoporte.find();
  
      const ticketsStatus = {}
      for (let ticket of tickets) {
        if (!ticketsStatus[ticket.estado]) {
          ticketsStatus[ticket.estado] = []
        }
        ticketsStatus[ticket.estado].push(ticket)
      }
  
      const ticketsPrioridad = {}
      for (let ticket of tickets) {
        if (!ticketsPrioridad[ticket.prioridad]) {
          ticketsPrioridad[ticket.prioridad] = []
        }
        ticketsPrioridad[ticket.prioridad].push(ticket)
      }
  
      const response = {
        estado: ticketsStatus,
        prioridad: ticketsPrioridad
      }
  
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las campañas', error });
    }
  });
  
  
  // Obtener un ticket específico por ID
  router.get('/ticketsSoporte/:id', async (req, res) => {
    try {
      const ticket = await TicketsSoporte.findById(req.params.id);
      if (!ticket) {
        return res.status(404).json({ message: 'Ticket no encontrado' });
      }
      res.status(200).json(ticket);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el Ticket de Soporte', error });
    }
  });
  
  // Editar un ticket existente
  router.put('/ticketsSoporte/:id', async (req, res) => {
    console.log("Editar Ticket de Soporte");
    try {
      const ticketActualizado = await TicketsSoporte.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!ticketActualizado) {
        return res.status(404).json({ message: 'Ticket no encontrado' });
      }
      res.status(200).json({ message: 'Ticket de soporte actualizado con éxito', data: ticketActualizado });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el Ticket de Soporte', error });
    }
  });
  
  // Obtener lista de todos los tickets de soporte
  router.get('/ticketsSoporte', async (req, res) => {
    try {
      const tickets = await TicketsSoporte.find();  // Consulta a la base de datos
      res.status(200).json(tickets);
    } catch (error) {
      console.error("Error al obtener los tickets de soporte:", error);
      res.status(500).json({ message: 'Error al obtener los tickets de soporte', error });
    }
  });
  
  // Eliminar un ticket existente
  router.delete('/ticketsSoporte/:id', async (req, res) => {
    try {
      const ticketEliminado = await TicketsSoporte.findByIdAndDelete(req.params.id);
      if (!ticketEliminado) {
        return res.status(404).json({ message: 'Ticket no encontrado' });
      }
      res.status(200).json({ message: 'Ticket de soporte eliminado', data: ticketEliminado });
    } catch (error) {
      console.error('Error al eliminar el ticket de soporte:', error);
      res.status(500).json({ message: 'Error al eliminar el ticket de soporte', error });
    }
  });
  
  // Obtener tickets para el reporte
  router.get('/tickets-reporte', async (req, res) => {
    console.log("req", req.query);
    try {
  
      let params = {}
      if (!!req.query.correo) {
        params = {
          ...params,
          correo: req.query.correo
        }
      }
      if (!!req.query.estado) {
        params = {
          ...params,
          estado: req.query.estado
        }
      }
      if (!!req.query.prioridad) {
        params = {
          ...params,
          prioridad: req.query.prioridad
        }
      }
  
      const tickets = await TicketsSoporte.find(params);
      res.status(200).json(tickets);
    } catch (error) {
      console.log('error', error)
      res.status(500).json({ message: 'Error al obtener las campañas', error });
    }
  });
  


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Configuración de almacenamiento de Multer para guardar archivos en la carpeta 'uploads'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');  // Directorio donde se guardarán los archivos
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));  // Nombre único basado en la fecha
    }
});

const upload = multer({ storage: storage });

// Crear una nueva tarea
router.post('/tareas', async (req, res) => {
    try {
        const nuevaTarea = new Tarea(req.body);
        await nuevaTarea.save();
        res.status(201).json(nuevaTarea);
    } catch (error) {
        console.error('Error al crear tarea:', error);
        res.status(400).json({ message: error.message });
    }
});

// Obtener todas las tareas
router.get('/tareas', async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.json(tareas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener una tarea por su ID
router.get('/tareas/:id', async (req, res) => {
    try {
        const tarea = await Tarea.findById(req.params.id);
        if (!tarea) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        res.json(tarea);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Actualizar una tarea
router.put('/tareas/:id', async (req, res) => {
    try {
        const tareaActualizada = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!tareaActualizada) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        res.json(tareaActualizada);
    } catch (error) {
        console.error('Error al actualizar tarea:', error);
        res.status(400).json({ message: error.message });
    }
});

// Eliminar una tarea
router.delete('/tareas/:id', async (req, res) => {
    try {
        const tareaEliminada = await Tarea.findByIdAndDelete(req.params.id);
        if (!tareaEliminada) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        res.json({ message: 'Tarea eliminada' });
    } catch (error) {
        console.error('Error al eliminar tarea:', error);
        res.status(500).json({ message: error.message });
    }
});

// Subir archivo adjunto a una tarea específica
router.post('/tareas/:id/adjuntar', upload.single('archivo'), async (req, res) => {
    try {
        const tarea = await Tarea.findById(req.params.id);
        if (!tarea) {
            return res.status(404).send('Tarea no encontrada');
        }

        // Agregar la ruta del archivo al campo adjuntos
        tarea.adjuntos.push(req.file.path);
        await tarea.save();

        res.status(200).json({ message: 'Archivo adjuntado correctamente', tarea });
    } catch (error) {
        console.error('Error al adjuntar archivo:', error);
        res.status(500).json({ message: 'Error al adjuntar archivo', error });
    }
});
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// *** CLIENTES ***
router.get('/clientes', async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/clientes/:id', async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/clientes', async (req, res) => {
    const cliente = new Cliente(req.body);
    try {
        const nuevoCliente = await cliente.save();
        res.status(201).json(nuevoCliente);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/clientes/:id', async (req, res) => {
    try {
        const clienteActualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(clienteActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/clientes/:id', async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndDelete(req.params.id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.json({ message: 'Cliente eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// *** GESTIÓN DE PEDIDOS ***

// Ruta para crear un nuevo pedido
router.post('/gestiondepedidos', async (req, res) => {
    const { cliente, metodoEntrega, direccionEntrega, fechaEntrega, estado, prioridad, productos } = req.body;

    // Validar que los campos requeridos estén presentes
    if (!cliente || !metodoEntrega || !direccionEntrega || !fechaEntrega || !estado || !prioridad || !productos) {
        return res.status(400).json({ message: 'Faltan campos requeridos.' });
    }

    // Calcular el total del pedido sumando el total de los productos
    let totalPedido = productos.reduce((sum, producto) => sum + producto.total, 0);

    try {
        const nuevoPedido = new GestionDePedidos({
            ...req.body,
            total: totalPedido // Aseguramos que el total del pedido se guarde correctamente
        });
        const pedidoGuardado = await nuevoPedido.save();
        res.status(201).json(pedidoGuardado);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el pedido', error: error.message });
    }
});

// Ruta para obtener todos los pedidos
router.get('/gestiondepedidos', async (req, res) => {
    try {
        const pedidos = await GestionDePedidos.find();
        res.status(200).json(pedidos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los pedidos', error: error.message });
    }
});

// Ruta para obtener un pedido por su ID
router.get('/gestiondepedidos/:id', async (req, res) => {
    try {
        const pedido = await GestionDePedidos.findById(req.params.id);
        if (!pedido) {
            return res.status(404).json({ message: 'Pedido no encontrado' });
        }
        res.status(200).json(pedido);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el pedido', error: error.message });
    }
});

// Ruta para actualizar un pedido existente
router.put('/gestiondepedidos/:id', async (req, res) => {
    try {
        const pedidoActualizado = await GestionDePedidos.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!pedidoActualizado) {
            return res.status(404).json({ message: 'Pedido no encontrado' });
        }
        res.status(200).json(pedidoActualizado);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el pedido', error: error.message });
    }
});

// Ruta para eliminar un pedido
router.delete('/gestiondepedidos/:id', async (req, res) => {
    try {
        const pedidoEliminado = await GestionDePedidos.findByIdAndDelete(req.params.id);
        if (!pedidoEliminado) {
            return res.status(404).json({ message: 'Pedido no encontrado' });
        }
        res.status(200).json({ message: 'Pedido eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el pedido', error: error.message });
    }
});


//-------------------------------------------------------------------------------------------------------------
// Obtener lista de todas las cotizaciones aprobadas
router.get('/cotizacionesAprobadas', async (req, res) => {
    try {
        const cotizacionesAprobadas = await Cotizacion.find({ estado: 'aprobada' });
        res.status(200).json(cotizacionesAprobadas);
    } catch (error) {
        console.error('Error al obtener las cotizaciones aprobadas:', error);
        res.status(500).json({ message: 'Error al obtener las cotizaciones aprobadas', error: error.message });
    }
});

// Obtener una cotización aprobada específica por ID
router.get('/cotizacionesAprobadas/:id', async (req, res) => {
    try {
        const cotizacion = await Cotizacion.findOne({ _id: req.params.id, estado: 'aprobada' });
        if (!cotizacion) {
            return res.status(404).json({ message: 'Cotización aprobada no encontrada' });
        }
        res.status(200).json(cotizacion);
    } catch (error) {
        console.error('Error al obtener la cotización aprobada por ID:', error);
        res.status(500).json({ message: 'Error al obtener la cotización aprobada', error: error.message });
    }
});

// Eliminar una cotización aprobada por ID
router.delete('/cotizacionesAprobadas/:id', async (req, res) => {
    try {
        const cotizacionEliminada = await Cotizacion.findOneAndDelete({ _id: req.params.id, estado: 'aprobada' });
        if (!cotizacionEliminada) {
            return res.status(404).json({ message: 'Cotización aprobada no encontrada' });
        }
        res.status(200).json({ message: 'Cotización aprobada eliminada con éxito' });
    } catch (error) {
        console.error('Error al eliminar la cotización aprobada:', error);
        res.status(500).json({ message: 'Error al eliminar la cotización aprobada', error: error.message });
    }
});

module.exports = router;